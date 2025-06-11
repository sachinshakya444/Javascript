function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
  }
  
  // Solution:
  console.log(isPalindrome("madam")); // true
  console.log(isPalindrome("hello")); // false