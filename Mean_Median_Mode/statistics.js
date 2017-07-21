	const stats = {
	    mean() {
	        return this.reduce((total, n) => total + n) / this.length
	    },
	    mode() {
	        // return most occurring numbers or elements(s).
	        let freq = [];
	        let counted = [];

	        this.forEach(function(i) {
	            if (!counted.includes(i)) {
	            	let data = {count: this.filter(x=>x==i).length, value: i };
	            	if (data.count > 1) {
	            		freq.push(data);	
	            		counted.push(i);
	            	}
	            	
	            }
	        }, this);
	        return freq.sort((a,b) => b.count-a.count).filter((e,i,arr)=>e.count>=arr[0].count).map(x=>x.value);
	    },


	    median() {
	    	//returns the middle number of range
	    	if (this.length == 0) return null;
	    	
	    	let arr = [...this].sort((a,b)=>a-b);
	    	if (arr.length % 2 == 0) { //even so sum middle two numbers
	    		let center = Math.floor(arr.length/2); 
	    		return (arr[center] + arr[center-1]) / 2
	    	} else { // just return middle number
	    		return arr[Math.floor(arr.length/2)];
	    	}

	    }
	}


	Object.assign(Array.prototype, stats);
