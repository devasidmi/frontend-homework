'use strict';

QUnit.module('Тестируем функцию minmax', function () {
	QUnit.test('minmax работает правильно на строках без чисел', function (assert) {
		assert.deepEqual(minmax(''), [undefined, undefined], 'Особый случай, когда в строке нет чисел');
		assert.deepEqual(minmax('мама мыла раму'), [undefined, undefined]);
	});

	QUnit.test('minmax правильно парсит отдельные числа', function (assert) {
		assert.deepEqual(minmax('0'), [0, 0]);
		assert.deepEqual(minmax('1'), [1, 1]);
		assert.deepEqual(minmax('Infinity'), [Infinity, Infinity]);
		assert.deepEqual(minmax('-Infinity'), [-Infinity, -Infinity]);
		assert.deepEqual(minmax('42'), [42, 42]);
		assert.deepEqual(minmax('.0'), [.0, .0]);
		assert.deepEqual(minmax('1.1'), [1.1, 1.1]);
		assert.deepEqual(minmax('.01'), [.01, .01]);
		assert.deepEqual(minmax('1.01'), [1.01, 1.01]);
		assert.deepEqual(minmax('1e5'), [1e5, 1e5]);
		assert.deepEqual(minmax('-1e-5'), [-1e-5, -1e-5]);
		assert.deepEqual(minmax('-.1e-5'), [-.1e-5, -.1e-5]);
	});

	QUnit.test('minmax правильно парсит несколько чисел', function (assert) {
		assert.deepEqual(minmax('0 0 0 0'), [0, 0]);
		assert.deepEqual(minmax('1 1 1 1'), [1, 1]);
		assert.deepEqual(minmax('1 2 3 4'), [1, 4]);
		assert.deepEqual(minmax('-Infinity -1 0 1 Infinity'), [-Infinity, Infinity]);
		assert.deepEqual(minmax('-.01 0 .01'), [-.01, .01]);
	});

	QUnit.test('minmax игнорирует обычный текст', function (assert) {
		assert.deepEqual(minmax('1, -5.8 или 10, хотя 34 + -5.3 и 73'), [-5.8, 73]);
	});
});

// Own tests

QUnit.module('Тестируем свои функции minmax', function () {
	QUnit.test('minmax работает правильно на строках без чисел', function (assert) {
		assert.deepEqual(minmax('Изучаю Kotlin'), [undefined, undefined]);
	});

QUnit.test('minmax правильно парсит отдельные числа', function (assert) {
		assert.deepEqual(minmax('0'), [0, 0]);
		assert.deepEqual(minmax('548'), [548, 548]);
		assert.deepEqual(minmax('.02'), [.02, .02]);
	});

QUnit.test('minmax правильно парсит несколько чисел', function (assert) {
		assert.deepEqual(minmax('5 6 3 2'), [2, 6]);
		assert.deepEqual(minmax('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 -10 21'), [-10, 21]);
		assert.deepEqual(minmax('7 7 7 7 7 7 7 7 7 7'), [7, 7]);
		assert.deepEqual(minmax('100 200 12 1'), [1, 200]);
		assert.deepEqual(minmax('-300 -1 Infinity 1000 Infinity'), [-300, Infinity]);
	});

QUnit.test('minmax игнорирует обычный текст', function (assert) {
		assert.deepEqual(minmax('я бы -548 раз -3300 лолподумал %прежде -100 раз п исать этот к о д + -'), [-3300, -100]);
	});
});
