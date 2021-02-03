'use strict'

const db = require('./conn');

class ClassModel {
    constructor(topic_name, topic) {
        this.topic_name = topic_name;
        this.ranking_value = ranking_value;
        this.ranking_title = ranking_title;

    }
    static async getAll() {
    const response = await db.any(`SELECT topic_name, ranking_value, ranking_title
    FROM topics
    INNER JOIN ranking_scale
    ON topics.topic_score = ranking_scale.id
    ORDER BY ranking_value DESC;
    `);
    return response;
    }
};




model.exports = classModel;