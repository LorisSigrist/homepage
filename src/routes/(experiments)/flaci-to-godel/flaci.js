/**
 * @typedef {Object} State Represents a States
 * @prop {number} ID The ID of the State
 * @prop {string} Name The displac name of the State
 * @prop {number} x The x position of the State
 * @prop {number} y The y position of the State
 * @prop {boolean} Final Is the State a Final State
 * @prop {boolean} Start Is the State the Starting State
 * @prop {number} Radius The Radius of the State
 * @prop {Transition[]} Transitions The Transitions of the State
 */

/**
 * @typedef {Object} Transition Represents a Transition
 * @prop {number} Source The ID of the Source State
 * @prop {number} Target The ID of the Target State
 * @prop {number} x The x position of the Transition midpoint
 * @prop {number} y The y position of the Transition midpoint
 * @prop {Label[]} Labels The Labels of the Transition
 */

/**
 * @typedef {[string, string, "L"|"R"|"N"]} Label Represents the display-label of a Transition
 * The first element is the input symbol, the second is the output symbol and the third is the direction
 */

/**
 * @typedef {Object} Automaton Represents a Turing Machine
 * @prop {string[]} Alphabet The input alphabet
 * @prop {string[]} StackAlphabet The stack alphabet. The first element is the empty symbol
 * @prop {State[]} States The States of the Turing Machine
 */

/**
 * @typedef {Object} Flaci
 * @prop {string} name The name of the Turing Machine
 * @prop {string} description The description of the Turing Machine
 * @prop {"TM"} type The type of the Turing Machine
 * @prop {Automaton} automaton The description of the Turing Machine
 */

/**
 * Transforms a FLACI description of a Turing Maschine into a Godel Number
 * @param {Flaci} flaci
 * @returns {BigInt} The Godel Number
 */
export function generateGodelNumber(flaci) {
	// 1. Modify the machine so that there is only one accepting state
	// 2. Relabel the states so that the starting state is ID:1, the accepting state has ID:2, and the outher states count up from there
	// 3. Encode the transitions into the Godel Number
	flaci = modifySoThatThereIsOnlyOneAcceptingState(flaci);
	const IDMap = generateIDMappings(flaci);
	flaci = remapIDs(flaci, IDMap);

	console.log(JSON.stringify(flaci));

	/**
	 * All the transitions
	 * @type {string[]}
	 */
    const transitions = [];
    
    const reorderedStackAlphabet = reorderedAlphabet(flaci.automaton.StackAlphabet);
	for (const state of flaci.automaton.States) {
		for (const transition of state.Transitions) {
			for (const label of transition.Labels) {
				const fromSymbolID = reorderedStackAlphabet.indexOf(label[0]) + 1;
				const toSymbolID = reorderedStackAlphabet.indexOf(label[1]) + 1;
				const direction = {
					L: 1,
					R: 2,
					N: undefined
				}[label[2]];
				if (fromSymbolID === undefined || toSymbolID === undefined || direction === undefined)
					throw new Error('Invalid label');

				const str = [transition.Source, fromSymbolID, transition.Target, toSymbolID, direction]
					.map(zeros)
					.join('1');
				transitions.push(str);
			}
		}
	}

	const godel = '1' + transitions.join('11');

    return BigInt("0b" + godel);
}

/**
 * Returns n zeros
 * @param {number} n
 * @returns {string} A string containing n zeros
 */
function zeros(n) {
	return '0'.repeat(n);
}

/**
 * Generates an ID mapping so that:
 * - The Starting State is ID: 1,
 * - The Final State is ID 2,
 * - The other states count up from there
 *
 * @param {Flaci} flaci
 * @returns {Map<number, number>}
 */
function generateIDMappings(flaci) {
	/** @type {Map<number, number>} */
	const map = new Map();

	const startingState = flaci.automaton.States.find((state) => state.Start);
	const acceptingState = flaci.automaton.States.find((state) => state.Final);
	const otherStates = flaci.automaton.States.filter((state) => !state.Start && !state.Final);
	if (!startingState) throw new Error('No starting state found');
	if (!acceptingState) throw new Error('No accepting state found');

	map.set(startingState.ID, 1);
	map.set(acceptingState.ID, 2);

	for (const otherState of otherStates) {
		map.set(otherState.ID, map.size + 1);
	}

	return map;
}

/**
 * Remaps the IDs of the states
 *
 * @param {Flaci} flaci
 * @param {Map<number, number>} map
 * @returns {Flaci} The remapped FLACI
 */
function remapIDs(flaci, map) {
	const modified = structuredClone(flaci);

	for (const state of modified.automaton.States) {
		state.ID = map.get(state.ID) || -1;
		state.Name = `q${state.ID}`;
		for (const transition of state.Transitions) {
			transition.Source = map.get(transition.Source) || -1;
			transition.Target = map.get(transition.Target) || -1;
		}
	}

	return modified;
}


/**
 * Reorders the stack-alphabet so that 
 * - 0 (if present) is at the first position
 * - 1 (if present) is at the second position
 * - The item that was at the first position (the empty symbol) is at the last position
 * 
 * @param {string[]} alphabet
 * @returns {string[]} The reordered alphabet
 */
function reorderedAlphabet(alphabet) { 
    if(alphabet.length < 1) return alphabet;

    const emptySymbol = alphabet[0];
    const newAlphabet = [
        "0", "1", emptySymbol, 
    ]

    // append all symbols that are in the alphabet, but not empty, 0, or 1
    for (const symbol of alphabet) { 
        if(!newAlphabet.includes(symbol)) newAlphabet.push(symbol);
    }

    return newAlphabet;
}

/**
 * Changes the given FLACI description of a Turing Machine so that there is only one accepting state
 * @param {Flaci} flaci
 * @returns {Flaci} The modified FLACI description
 */
function modifySoThatThereIsOnlyOneAcceptingState(flaci) {
	const modified = structuredClone(flaci);

	// Find the maximum ID of all states
	// so that the new accepting state is guaranteed to have a new ID
	const maxID = Math.max(...modified.automaton.States.map((state) => state.ID));

	/** @type {State} */
	const acceptingState = {
		ID: maxID + 1,
		Name: `q${maxID + 1}`,
		x: 0,
		y: 0,
		Start: false,
		Final: true,
		Radius: 30,
		Transitions: []
	};

	// loop over all states in the machine
	for (const state of modified.automaton.States) {
		if (!state.Final) continue;

		// if this is an accepting state
		// 1. For all symbols that don't have a transition, transition into the accepting state
		// 2. Mark this state as non-accepting

		/**
		 * Stores the symbols that this state has a transition for
		 * @type {Set<string>}
		 */
		const usedSymbols = new Set();

		for (const transition of state.Transitions) {
			for (const label of transition.Labels) {
				usedSymbols.add(label[0]);
			}
		}

		// All the symbols that the state doesn't have a transition for
		const unusedSymbols = modified.automaton.StackAlphabet.filter((s) => !usedSymbols.has(s));

		// Create new Transitions for the unused symbols
		state.Transitions.push({
			Source: state.ID,
			Target: acceptingState.ID,
			x: 0,
			y: 0,
			Labels: unusedSymbols.map((s) => [s, s, 'R'])
		});

		state.Final = false;
	}

	// add the accepting state
	modified.automaton.States.push(acceptingState);

	return modified;
}
