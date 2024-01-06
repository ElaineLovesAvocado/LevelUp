const record = '1-5-2024	10	10	8	4	A🌟	4	Q	Chloe	Linyi	NA	NA	';

const formatRecord = record.replace(/\t/g, ' ').trim();

const words = formatRecord.split(' ')

console.log(words);

