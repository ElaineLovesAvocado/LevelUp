const record = '1-1-2024	6	6	A🌟	9	J	K	10	JoeS	Elaine	NA	NA													';

const formatRecord = record.replace(/\t/g, ' ').trim();

const words = formatRecord.split(' ')

console.log(words);

