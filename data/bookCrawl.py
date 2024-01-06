import requests
from bs4 import BeautifulSoup

headers = requests.utils.default_headers()

headers.update(
    {
        'User-Agent': 'My User Agent 1.0',
    }
)


def getData (url):
	content = BeautifulSoup(requests.get(url, headers=headers).text)

	info = content.body.find('div', attrs={'class':'product_view_tab_content_additional'}).find_all('tr')

	data = {}
	
	data['URL'] = url 
	
	for e in info:
		field1 = e.find('th')
		field2 = e.find('td')
		if field1 is not None and field2 is not None:
			data[field1.text.strip()] = field2.text.strip()

	# get desc

	desc = content.body.find_all('p', attrs={'style': 'text-align: justify;'})[1:]

	data['Mô tả'] = ''

	for e in desc:
		data['Mô tả'] += e.text + ' '

	data['Mô tả'] = data['Mô tả'].strip()

	return data


##print(getData("htps://www.fahasa.com/huyen-xua-kem-chu-ky-tac-gia.html"))