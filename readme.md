[![Build status](https://ci.appveyor.com/api/projects/status/f4pvl804dtskxa72?svg=true)](https://ci.appveyor.com/project/ART20230129/js-ac-hw-4-1-clearfunction)

# Символы и генераторы
Легенда

Реализовывать итераторы не так уж здорово, правда? Давайте посмотрим, как нам могут помочь генераторы при переборе.
Описание

Используйте следующую заготовку для организации перебора класса Team:

class Team {
  ...
  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
  }

}