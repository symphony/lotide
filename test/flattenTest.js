const { assertEqual, flatten } = require('../lib/index');
assertEqual(flatten([1, [2, [3], [4, [[[5, [6]]]]]]]), [1, 2, 3, 4, 5, 6]);
assertEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);