const PROTEINS = {
	'AUG': 'Methionine',
	'UUU': 'Phenylalanine',
	'UUC': 'Phenylalanine',
	'UUA': 'Leucine',
	'UUG': 'Leucine',
	'UCU': 'Serine',
	'UCC': 'Serine',
	'UCA': 'Serine',
	'UCG': 'Serine',
	'UAU': 'Tyrosine',
	'UAC': 'Tyrosine',
	'UGU': 'Cysteine',
	'UGC': 'Cysteine',
	'UGG': 'Tryptophan',
	'UAA': 'STOP',
	'UAG': 'STOP',
	'UGA': 'STOP',
}

export const translate = (rna) => {
	if (!rna) { return []; }

	const codons = rna.match(/.{1,3}/g);
	const arr = codons.map(s => PROTEINS[s]);

	codons.forEach(s => {
		if (!PROTEINS[s]) { throw new Error("Invalid codon"); }
	});

	if (arr[0] === 'STOP') {
		return [];
	} else {
		if (arr.includes('STOP')) {
			return arr.slice(0, arr.indexOf('STOP'));
		} else {
			return arr;
		}
	}
}
