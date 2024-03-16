let record = "3-15-2024	8	10	5	7	3	9	3	TJ	Elaine	NA	NA													"

const formatRecord = record.replace(/\t/g, ' ').trim();

const words = formatRecord.split(' ')

console.log(words);

