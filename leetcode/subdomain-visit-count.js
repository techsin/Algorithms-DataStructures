/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const hashmap = {};
    
    cpdomains.forEach(function(str){
        let [num, domain] = str.split(' ');
        let domains = domain.split('.');
        let dstr = '';
        for (let i = domains.length - 1; i > -1; i--) {
            if (dstr === '') {
                dstr = domains[i];
            } else {
                dstr = domains[i] + '.' + dstr;
            }
            
            hashmap[dstr] = hashmap[dstr] || 0;
            hashmap[dstr] += parseInt(num);
        }
    });
    
    
    
    let results = [];

    for (let k in hashmap) {
        results.push([hashmap[k], k])
    }
    
    results.sort((a,b)=> b[0] - a[0]);
    
    return results.map(x => x.join(' '));
};
