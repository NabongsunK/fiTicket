const pool = require("./pool");

const cartModel = {
  // async cartSelected(id, conn = pool) {
  //   try {
  //     const sql = `
  //       select
  //         users.login_id as id,
  //         user_name,
  //         user_phone,
  //         user_email,
  //         ticket_id,
  //         ticket_name,
  //         ticket_price,
  //         ticket_discount,
  //         ticket_quantity,
  //         DATE_FORMAT(curr_time, '%Y-%m-%d %H:%i:%s') as curr_time
  //       from shopping_cart
  //       where users.id = ?
  //     `;
  //     const [result] = await conn.query(sql, [id]);
  //     return result[0];
  //   } catch (err) {
  //     throw new Error("DB Error", { cause: err });
  //   }
  // },

  // cart 생성
  async createCart(item, conn = pool) {
    try {
      const sql = `insert into cart set ?`;
      const [result] = await conn.query(sql, [item]);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // cart 조회
  async findCartById(id, conn = pool) {
    try {
      const sql = `select id from cart where id= ?`;
      const [result] = await conn.query(sql, [id]);
      return result[0];
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 장바구니 티켓정보 shopping_cart에 등록
  async insertTicket(item, conn = pool) {
    try {
      const sql = `insert into shopping_cart_item set ?`;
      const [result] = await conn.query(sql, [item]);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 결제 미완
  async checkOutCancel(id, conn = pool) {
    try {
      const sql = `delete from shopping_cart_item where id = ?`;
      const [result] = await conn.query(sql, [id]);
      return result.affectedRows;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
};

module.exports = cartModel;
