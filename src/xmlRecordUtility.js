const record = '1-26-2024	5	7	J	4	2+	2	10	Chole	JoeS	NA	NA';

const formatRecord = record.replace(/\t/g, ' ').trim();

const words = formatRecord.split(' ')

console.log(words);

