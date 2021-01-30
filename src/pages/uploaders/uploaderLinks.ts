export const uploaderLinks = [
	{
		id: 1,
		code: 'db-acc',
		name: 'Deutsche bank account',
		pic: '#'
	},
	{
		id: 2,
		code: 'db-visa',
		name: 'Deutsche bank visa',
		pic: '#'
	},
	{
		id: 3,
		code: 'db-mx-depo',
		name: 'Deutsche bank maxBlue depo',
		pic: '#'
	},
	{
		id: 4,
		code: 'db-mx-acc',
		name: 'Deutsche bank maxBlue account',
		pic: '#'
	},
	{
		id: 5,
		code: 'dkb-acc',
		name: 'DKB account',
		pic: '#'
	},
	{
		id: 6,
		code: 'dkb-visa',
		name: 'DKB Visa',
		pic: '#'
	},
	{
		id: 7,
		code: 'lacaixa-acc',
		name: 'La Caixa account',
		pic: '#'
	},
	{
		id: 8,
		code: 'scalable-acc',
		name: 'Scalable account',
		pic: '#'
	},
]

export const findUploaderLink = (code: string) => uploaderLinks.find((uploaderLink) => uploaderLink.code === code )
