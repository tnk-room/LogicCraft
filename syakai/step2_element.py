def check_answer(func, input1, input2, expected):
    if func.__name__ == "not_gate":
        result = func(input1)
    else:
        result = func(input1, input2)
    return 1 if result == expected else 0

def and_gate(input1, input2):
    return input1 & input2

def or_gate(input1, input2):
    return input1 | input2

def xor_gate(input1, input2):
    return input1 ^ input2

def nand_gate(input1, input2):
    return int(not (input1 & input2))

def nor_gate(input1, input2):
    return int(not (input1 | input2))

def not_gate(input1):
    return int(not input1)

if __name__ == '__main__':
    input1 = [0, 0, 1, 1]
    input2 = [0, 1, 0, 1]

    gates = [
        (and_gate, [(0, 0), (0, 1), (1, 0), (1, 1)], [0, 0, 0, 1]),
        (or_gate, [(0, 0), (0, 1), (1, 0), (1, 1)], [0, 1, 1, 1]),
        (xor_gate, [(0, 0), (0, 1), (1, 0), (1, 1)], [0, 1, 1, 0]),
        (nand_gate, [(0, 0), (0, 1), (1, 0), (1, 1)], [1, 1, 1, 0]),
        (nor_gate, [(0, 0), (0, 1), (1, 0), (1, 1)], [1, 0, 0, 0])
    ]

    for gate, inputs, expected_outputs in gates:
        correct = 0
        for (i1, i2), expected in zip(inputs, expected_outputs):
            correct += check_answer(gate, i1, i2, expected)
        if correct == len(inputs):
            print(f"{gate.__name__} => OK")
        else:
            print(f"{gate.__name__} => NG")

    # NOTゲートのテストは別途行う
    not_inputs = [0, 1]
    not_expected = [1, 0]
    correct = 0
    for i, expected in zip(not_inputs, not_expected):
        correct += check_answer(not_gate, i, None, expected)
    if correct == len(not_inputs):
        print("not_gate => OK")
    else:
        print("not_gate => NG")
