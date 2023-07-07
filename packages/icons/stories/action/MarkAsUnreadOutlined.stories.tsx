import type { Meta, StoryObj } from '@storybook/react';

import MarkAsUnreadOutlined from '../../lib/action/MarkAsUnreadOutlined';

const meta: Meta<typeof MarkAsUnreadOutlined> = {
  component: MarkAsUnreadOutlined,
  tags: ['autodocs'],
  title: 'action/MarkAsUnreadOutlined',
};

export default meta;
type Story = StoryObj<typeof MarkAsUnreadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
