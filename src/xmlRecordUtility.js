const record = '2-2-2024	A+🌟	A	Q	A	K	A	8	Jack	JoeZ	NA	NA';

const formatRecord = record.replace(/\t/g, ' ').trim();

const words = formatRecord.split(' ')

console.log(words);

