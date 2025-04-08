# -*- coding: utf-8 -*-
# Part of Bereka Systems. See LICENSE file for full copyright and licensing details.

from odoo import models, _
from markupsafe import Markup

class MailBotDebrand(models.AbstractModel):
    _inherit = 'mail.bot'

    def _get_answer(self, record, body, values, command=False):
        # Get original answer
        answer = super(MailBotDebrand, self)._get_answer(record, body, values, command)
        if not answer:
            return answer

        # Replace all OdooBot references with BerekaBot
        if isinstance(answer, str):
            answer = (answer
                .replace("OdooBot", "BerekaBot")
                .replace("Odoo Bot", "BerekaBot")
                .replace("odoobot", "berekabot")
            )
        elif isinstance(answer, Markup):
            answer = Markup(
                str(answer)
                .replace("OdooBot", "BerekaBot")
                .replace("Odoo Bot", "BerekaBot")
                .replace("odoobot", "berekabot")
            )

        # Update other Odoo-specific references
        answer = answer.replace(
            "https://www.odoo.com/documentation",
            ""
        ).replace(
            "https://www.odoo.com/slides",
            ""
        )

        return answer

    def _is_bot_in_private_channel(self, record):
        """Override to use BerekaBot name in logic"""
        berekabot_id = self.env['ir.model.data']._xmlid_to_res_id("base.partner_root")
        if record._name == 'discuss.channel' and record.channel_type == 'chat':
            return berekabot_id in record.with_context(active_test=False).channel_partner_ids.ids
        return False

    def _is_bot_pinged(self, values):
        """Override to use BerekaBot name in logic"""
        berekabot_id = self.env['ir.model.data']._xmlid_to_res_id("base.partner_root")
        return berekabot_id in values.get('partner_ids', [])