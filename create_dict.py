import json

import cn_sort

d = {}
with open("ChengYu_Corpus（5W）.txt", "r", encoding="utf_8_sig") as file:
    for idiom in cn_sort.process_cn_word.sort_text_list(file.read().splitlines()[3:]):
        d.setdefault(idiom[0], []).append(idiom)
print(d)
with open("chinese_idioms_dict.json", "w", encoding="utf8") as file:
    json.dump(d, file, separators=(",", ":"), ensure_ascii=False)
