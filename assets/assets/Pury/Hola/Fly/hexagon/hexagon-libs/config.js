
/**
 * 棋盘属性
 *
 * @param SIZE                 棋盘大小（半径）
 * @param ORIGIN_W             格子原始宽度
 * @param ORIGIN_H             格子原始宽度
 * @param BLOCK_W              格子虚拟宽度（1.1倍）
 * @param BLOCK_H              格子虚拟高度（1.1倍）
 * @param BLOCK_SHAPE_W        格子形状中宽度（0.9倍）
 * @param BLOCK_SHAPE_H        格子形状中高度（0.9倍）
 * @param BLOCK_SHAPE_W_BIG    格子形状中被点击时宽度（1倍）
 * @param BLOCK_SHAPE_H_BIG    格子形状中被点击时高度（1倍）
 */
window.DATA_TETRIS =
{
	SIZE:              4,
	ORIGIN_W:          40,
	ORIGIN_H:          46,
	BLOCK_W:           46,
	BLOCK_H:           51,
	BLOCK_SHAPE_W:     36,
	BLOCK_SHAPE_H:     42,
	BLOCK_SHAPE_W_BIG: 40,
	BLOCK_SHAPE_H_BIG: 46,
};

/**
 * 形状集合
 *
 * @param color 颜色集合(固定)
 * @param list  形状逻辑坐标
 *
 */
window.DATA_SHAPE =
{
	color: [1, 2],
	list: 	
	[
		[[ 0,  0]],
		[[ 1, -1], [ 0,  0], [ 1,  0], [ 0,  1]],
		[[ 0,  0], [ 1,  0], [-1,  1], [ 0,  1]],
		[[ 0,  0], [ 1,  0], [ 0,  1], [ 1,  1]],
		[[ 0, -1], [ 0,  0], [ 0,  1], [ 0,  2]],
		[[ 0,  0], [ 1, -1], [-1,  1], [-2,  2]],
		[[-1,  0], [ 0,  0], [ 1,  0], [ 2,  0]],
		[[ 0,  0], [ 0,  1], [ 0, -1], [-1,  0]],
		[[ 0,  0], [ 0, -1], [ 1, -1], [-1,  1]],
		[[ 0,  0], [ 0,  1], [ 0, -1], [ 1,  0]],
		[[ 0,  0], [ 1,  0], [-1,  0], [ 1, -1]],
		[[ 0,  0], [ 1,  0], [-1,  0], [-1,  1]],
		[[ 0,  0], [ 0,  1], [ 0, -1], [ 1, -1]],
		[[ 0,  0], [ 1, -1], [-1,  1], [-1,  0]],
		[[ 0,  0], [ 1, -1], [-1,  1], [ 1,  0]],
		[[ 0,  0], [ 1,  0], [-1,  0], [ 0, -1]],
		[[ 0,  0], [ 1,  0], [-1,  0], [ 0,  1]],
		[[ 0, -1], [-1,  0], [-1,  1], [ 0,  1]],
		[[-1,  0], [ 0, -1], [ 1, -1], [ 1,  0]],
		[[ 0, -1], [ 1, -1], [ 1,  0], [ 0,  1]],
		[[-1,  1], [ 0,  1], [ 1,  0], [ 1, -1]],
		[[-1,  0], [-1,  1], [ 0, -1], [ 1, -1]],
		[[-1,  0], [-1,  1], [ 0,  1], [ 1,  0]]
	]
};

/**
 * 消除格子线
 *
 * @param LEFT   左斜
 * @param MIDDLE 横线
 * @param RIGHT  右斜
 */
window.DATA_LINE = 
{
	LEFT:
	[
		[0, -4],
		[1, -4],
		[2, -4],
		[3, -4],
		[4, -4],
		[4, -3],
		[4, -2],
		[4, -1],
		[4,  0]	
	],
	
	MIDDLE:
	[
		[ 0, -4, 5],
		[-1, -3, 6],
		[-2, -2, 7],
		[-3, -1, 8],
		[-4,  0, 9],
		[-4,  1, 8],
		[-4,  2, 7],
		[-4,  3, 6],
		[-4,  4, 5]
	],
	
	RIGHT:
	[
		[-4,  0, 5],
		[-3, -1, 6],
		[-2, -2, 7],
		[-1, -3, 8],
		[ 0, -4, 9],
		[ 1, -4, 8],
		[ 2, -4, 7],
		[ 3, -4, 6],
		[ 4, -4, 5]
	]
};

/**
 * 形状集合2
 *
 * @param value 颜色
 * @param list  形状逻辑坐标
 *

window.DATA_SHAPE2 =
{
	tiles: 
	[
		{
			value: 1,
			list: [[[0, 0]]]
		},
		{
			value: 2,
			list: 
			[
				[[1, -1], [0, 0], [1, 0],  [0, 1]],
				[[0, 0],  [1, 0], [-1, 1], [0, 1]],
				[[0, 0],  [1, 0], [0, 1],  [1, 1]]
			]
		}, 
		{
			value: 3,
			list: 
			[
				[[0, -1], [0, 0],  [0, 1],  [0, 2]],
				[[0, 0],  [1, -1], [-1, 1], [-2, 2]],
				[[-1, 0], [0, 0],  [1, 0],  [2, 0]]
			]
		}, 
		{
			value: 4,
			list: 
			[
				[[0, 0], [0, 1],  [0, -1], [-1, 0]],
				[[0, 0], [0, -1], [1, -1], [-1, 1]],
				[[0, 0], [0, 1],  [0, -1], [1, 0]],
				[[0, 0], [1, 0],  [-1, 0], [1, -1]],
				[[0, 0], [1, 0],  [-1, 0], [-1, 1]]
			]
		}, 
		{
			value: 5,
			list: 
			[
				[[0, 0], [0, 1],  [0, -1], [1, -1]],
				[[0, 0], [1, -1], [-1, 1], [-1, 0]],
				[[0, 0], [1, -1], [-1, 1], [1, 0]],
				[[0, 0], [1, 0],  [-1, 0], [0, -1]],
				[[0, 0], [1, 0],  [-1, 0], [0, 1]]
			]
		}, 
		{
			value: 6,
			list: 
			[
				[[0, -1], [-1, 0], [-1, 1], [0, 1]],
				[[-1, 0], [0, -1], [1, -1], [1, 0]],
				[[0, -1], [1, -1], [1, 0],  [0, 1]],
				[[-1, 1], [0, 1],  [1, 0],  [1, -1]],
				[[-1, 0], [-1, 1], [0, -1], [1, -1]],
				[[-1, 0], [-1, 1], [0, 1],  [1, 0]]
			]
		}
	]
}

 */
 
/**
 * 色块数据
 *
 * @param name   名称
 * @param type   类型(固定)
 * @param score  分数
 */
 window.DATA_COLOR = 
 [
	{"name": "pink",   "type": 1, "score": 1},
	{"name": "orange", "type": 2, "score": 2}
 ];

/*---------------------------------------------------------------------------------------------------------------------------
												Global Data
---------------------------------------------------------------------------------------------------------------------------*/

window.COLOR_TYPE = 
{
	PINK:   1,
	ORANGE: 2
};

window.POOL_TYPE = 
{
	SHAPE: 1
};

window.TRANSFORM_TYPE = 
{
	BOARD:     1,
	SHAPE:     2,
	SHAPE_BIG: 3
};

window.DRAG_STATUS = 
{
	NONE: 1,
	DOWN: 2,
	MOVE: 3,
	UP:   4
};

window.BOARD_BLOCK_STATUS = 
{
	"NO":  1,
	"YES": 2
};

window.pool_all_shape = [];




































