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

def test_gate(gate, inputs, expected_outputs):
    return (check_answer(gate, inputs[0][0], inputs[0][1], expected_outputs[0]) +
            check_answer(gate, inputs[1][0], inputs[1][1], expected_outputs[1]) +
            check_answer(gate, inputs[2][0], inputs[2][1], expected_outputs[2]) +
            check_answer(gate, inputs[3][0], inputs[3][1], expected_outputs[3]))

def run_tests():
    gates = [
        (and_gate, [(0, 0), (0, 1), (1, 0), (1, 1)], [0, 0, 0, 1]),
        (or_gate, [(0, 0), (0, 1), (1, 0), (1, 1)], [0, 1, 1, 1]),
        (xor_gate, [(0, 0), (0, 1), (1, 0), (1, 1)], [0, 1, 1, 0]),
        (nand_gate, [(0, 0), (0, 1), (1, 0), (1, 1)], [1, 1, 1, 0]),
        (nor_gate, [(0, 0), (0, 1), (1, 0), (1, 1)], [1, 0, 0, 0])
    ]

    results = [
        f"{gate[0].__name__} => OK" if test_gate(gate[0], gate[1], gate[2]) == 4 else f"{gate[0].__name__} => NG"
        for gate in gates
    ]

    correct_not = (check_answer(not_gate, 0, None, 1) +
                    check_answer(not_gate, 1, None, 0))
    results.append("not_gate => OK" if correct_not == 2 else "not_gate => NG")

    results = "\n".join(results)

    return results

# 実行例
test_results = run_tests()
print(test_results)