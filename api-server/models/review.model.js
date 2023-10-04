const pool = require("./pool");

const reviewModel = {
  // review 조회
  async findReview(conn = pool) {
    try {
      const sql = `
      select
        review.*,
        festival_api.title as ticket_name
      from review
        left join festival_api on review.ticket_id = festival_api.id
      ORDER BY created_at desc
      `;
      const [result] = await conn.query(sql);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // ticket_id 별 review 조회
  async findByTicket(ticket, conn = pool) {
    try {
      const sql = `
      select 
        review.id as id, 
        rating, 
        festival_api.title as ticket_name, 
        users.name as user_name, 
        content,
        review.created_at
      from review
        left join users on review.user_id = users.id
        left join festival_api on review.ticket_id = festival_api.id
      where review.ticket_id = ?
      ORDER BY created_at desc
      `;
      const [result] = await conn.query(sql, [ticket]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // review 등록
  async create(article, conn = pool) {
    try {
      const sql = `insert into review set ?`;
      const [result] = await conn.query(sql, [article]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // best review 조회
  async bestReview(review, conn = pool) {
    try {
      const sql = `
      select 
        review.id as id, 
          rating, 
          festival_api.title as ticket_name, 
          festival_api.first_image as first_image,
          users.name as user_name, 
          content
        from review
          left join users on review.user_id = users.id
          left join festival_api on review.ticket_id = festival_api.id
      where best_review is true
      `;
      const [result] = await conn.query(sql, [review]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // best review toggle
  async changeToBest(id, conn = pool) {
    try {
      const sql = `
        update review set best_review=if(best_review=1,0,1) where id= ?;
          `;
      const [result] = await conn.query(sql, [id]);
      return result.affectedRows;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // review delete
  async deleteReview(id, conn = pool) {
    try {
      const sql = `
        delete from review where id = ?
      `;
      const [result] = await conn.query(sql, [id]);
      return result.affectedRows;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // review 수정
  async updateReview(id, article, conn = pool) {
    try {
      const sql = `
        update review set ? where id = ?
      `;
      const [result] = await conn.query(sql, [article, id]);
      // console.log(result);
      return result.affectedRows;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
};

module.exports = reviewModel;
