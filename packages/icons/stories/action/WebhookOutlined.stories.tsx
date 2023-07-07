import type { Meta, StoryObj } from '@storybook/react';

import WebhookOutlined from '../../lib/action/WebhookOutlined';

const meta: Meta<typeof WebhookOutlined> = {
  component: WebhookOutlined,
  tags: ['autodocs'],
  title: 'action/WebhookOutlined',
};

export default meta;
type Story = StoryObj<typeof WebhookOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
