exports.level = {
  "disabledMap": {
    "git cherry-pick": true,
    "git revert": true
  },
  "goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C4%27%22%2C%22id%22%3A%22master%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22bug%22%3A%7B%22target%22%3A%22C1%27%22%2C%22id%22%3A%22bug%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C4%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C4%22%7D%2C%22C1%27%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%27%22%7D%2C%22C2%27%22%3A%7B%22parents%22%3A%5B%22C1%27%22%5D%2C%22id%22%3A%22C2%27%22%7D%2C%22C3%27%22%3A%7B%22parents%22%3A%5B%22C2%27%22%5D%2C%22id%22%3A%22C3%27%22%7D%2C%22C4%27%22%3A%7B%22parents%22%3A%5B%22C3%27%22%5D%2C%22id%22%3A%22C4%27%22%7D%7D%2C%22tags%22%3A%7B%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22master%22%2C%22id%22%3A%22HEAD%22%7D%7D",
  "solutionCommand": "git checkout bug;git commit --amend;git checkout master;git rebase bug",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C4\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"bug\":{\"target\":\"C1\",\"id\":\"bug\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"}},\"tags\":{},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "name": {
    "en_US": "Errors of the past",
    "ru_RU": "Ошибки прошлого"
  },
  "hint": {
    "en_US": "It is assumed that the bug happened long ago, so using cherry-pick is nonefficient.",
    "ru_RU": "Предполагается, что баг далеко в прошлом, поэтому cherry-pick использовать неоптимально."
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Fixing a bug in the past",
              "Suddenly, you find out that a couple of commits ago a bug was introduced into your code and that revision was not yet sent to other people (pushed to public repo). The best way to deal with this situation is to come back in time and launch git commit --amend there."  
              "It can be done either automatically through 'git rebase -i' or manually through 'git checkout' followed by 'git rebase' after the bug is fixed.",
              "",
              "If someone has already received those changes from you (pulled from the public repo you've pushed to) then rebase is considered a bad practice and should only be used when absolutely necessary (eg someone committed a 10Gb file by mistake). In that case you should instruct everybody who received the rebased branch to do git reset --hard to apply your changes to their repos."
              "",
              "In this level perform the rebase manually."
            ]
          }
        }
      ]
    },
    "ru_RU": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Исправляем ошибку в прошлом",
              "Обнаружилось, что несколько коммитов назад в вашей программе была допущена ошибка и эта ревизия еще не была отправлена другим людям. Такую ошибку лучше всего исправить, вернувшись в прошлое и запустив там git commit --amend.",
              "Сделать это можно либо через git rebase -i либо вручную через git checkout, затем git rebase (после того, как баг исправлен).",
              "",
              "Если же кто-то уже получил от вас эти изменения, тогда rebase нежелателен - этого человека придётся просить сделать git reset --hard, чтобы он не перезатёр результат вашего rebase. Обычно так делают, если кто-то по ошибке закоммитил файл размером гигабайт 10, а иметь дело с раздувшимся в результате этого репозиторием не хочется.",
              "",
              "В данном задании сделайте rebase вручную."
            ]
          }
        }
      ]
    }
  }
};
