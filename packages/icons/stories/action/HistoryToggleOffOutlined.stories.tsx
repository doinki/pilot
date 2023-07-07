import type { Meta, StoryObj } from '@storybook/react';

import HistoryToggleOffOutlined from '../../lib/action/HistoryToggleOffOutlined';

const meta: Meta<typeof HistoryToggleOffOutlined> = {
  component: HistoryToggleOffOutlined,
  tags: ['autodocs'],
  title: 'action/HistoryToggleOffOutlined',
};

export default meta;
type Story = StoryObj<typeof HistoryToggleOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
