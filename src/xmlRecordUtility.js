let record = "3-23-2024	Q	K	7	6	A	6	9	Chloe	TJ	NA	NA													"

const formatRecord = record.replace(/\t/g, ' ').trim();

const words = formatRecord.split(' ')

console.log(words);

