/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(s) {
        let ans = '';
        for (let i = 0; i < s.length;) {
            if (s[i] == 'G') ans += 'G', ++i;
            else if (s[i + 1] == ')') ans += 'o', i += 2;
            else ans += "al", i += 4;
        }
        return ans;
};
