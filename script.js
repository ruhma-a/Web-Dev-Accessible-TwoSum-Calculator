// Our sacred collection of marbles (state variables)
let myArray = [];
let targetValue = 0;

/**
 * 1. THE ALGORITHM
 * With no nested loops! O(n) time complexity via Hash Map. 
 */
function twoSum(arr, target) {
    const numMap = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        
        // If the complement is already in our map, we're chilling
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; 
        }
        
        // Otherwise, stash it in the map for later
        numMap.set(arr[i], i);
    }
    
    return null;
}

/**
 * 2. DOM MANIPULATION: Flinging things INTO the array
 */
function pushToArray() {
    const inputField = document.getElementById('numInput');
    const value = parseInt(inputField.value);
    
    if (!isNaN(value)) {
        myArray.push(value);
        inputField.value = ''; // clean up
        updateUI();
    }
}

/**
 * 3. DOM MANIPULATION: Flinging things OUT of the array
 */
function popFromArray() {
    if (myArray.length > 0) {
        myArray.pop();
        updateUI();
    }
}

/**
 * 4. DOM MANIPULATION: Setting the trap (target)
 */
function updateTarget() {
    const targetInput = document.getElementById('targetInput');
    targetValue = parseInt(targetInput.value) || 0;
    updateUI();
}

/**
 * 5. UPDATE FUNCTION: 
 * Because letting the UI fall out of sync with the data is not classy
 */
function updateUI() {
    const displayElement = document.getElementById('arrayDisplay');
    const resultElement = document.getElementById('resultText');
    
    // Wipe it clean before redoing
    displayElement.innerHTML = ''; 
    
    if (myArray.length === 0) {
        displayElement.innerHTML = '<span class="empty-state">[ Array is empty. Feed it numbers. ]</span>';
    } else {
        // Spawn the array boxes
        myArray.forEach((num, index) => {
            const box = document.createElement('div');
            box.className = 'array-box';
            box.textContent = `${num}`;
            box.title = `Index: ${index}`; // A little treat for anyone who hovers
            displayElement.appendChild(box);
        });
    }
    
    // Run the TwoSum Algorithm and let the user know what happened
    if (myArray.length < 2) {
        resultElement.textContent = "Need at least 2 numbers to run TwoSum! C'mon now.";
    } else {
        const result = twoSum(myArray, targetValue);
        
        if (result) {
            const [index1, index2] = result;
            resultElement.innerHTML = `Success! Target <b>${targetValue}</b> found by adding 
                                       indices <b>[${index1}]</b> (${myArray[index1]}) and 
                                       <b>[${index2}]</b> (${myArray[index2]}).`;
        } else {
            resultElement.textContent = `No two numbers add up to ${targetValue} yet. Keep pushing marbles!`;
        }
    }
}