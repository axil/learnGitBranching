a = {"goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C3%27%27%22%2C%22id%22%3A%22master%22%7D%2C%22newImage%22%3A%7B%22target%22%3A%22C2%22%2C%22id%22%3A%22newImage%22%7D%2C%22caption%22%3A%7B%22target%22%3A%22C3%27%27%22%2C%22id%22%3A%22caption%22%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C3%27%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%27%22%7D%2C%22C2%27%22%3A%7B%22parents%22%3A%5B%22C3%27%22%5D%2C%22id%22%3A%22C2%27%22%7D%2C%22C2%27%27%22%3A%7B%22parents%22%3A%5B%22C3%27%22%5D%2C%22id%22%3A%22C2%27%27%22%7D%2C%22C2%27%27%27%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%27%27%27%22%7D%2C%22C3%27%27%22%3A%7B%22parents%22%3A%5B%22C2%27%27%27%22%5D%2C%22id%22%3A%22C3%27%27%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22master%22%2C%22id%22%3A%22HEAD%22%7D%7D"}
import urllib
#print urllib.unquote(a['goalTreeString'])
b = urllib.unquote(a['goalTreeString'])
c = eval(b.replace('true', 'True'))
from pprint import pprint
pprint(c)
