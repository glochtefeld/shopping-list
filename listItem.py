class ListItem:
    def __init__(self, name, quantity, priority, store, section, price, purchased):
        self._name = name
        self._quantity = quantity
        self._priority = priority
        self._store = section
        self._price = price
        self._purchased = purchased

        def __str__(self):
            return str(self._name) + ',' + str(self._quantity) + ',' + \
            str(self._priority) + ',' + str(self._store) + ',' + str(self._price) \
            + ',' str(self._purchased)
