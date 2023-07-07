import type { Meta, StoryObj } from '@storybook/react';

import HistoryOutlined from '../../lib/action/HistoryOutlined';

const meta: Meta<typeof HistoryOutlined> = {
  component: HistoryOutlined,
  tags: ['autodocs'],
  title: 'action/HistoryOutlined',
};

export default meta;
type Story = StoryObj<typeof HistoryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
