import type { Meta, StoryObj } from '@storybook/react';

import ChangeHistoryOutlined from '../../lib/action/ChangeHistoryOutlined';

const meta: Meta<typeof ChangeHistoryOutlined> = {
  component: ChangeHistoryOutlined,
  tags: ['autodocs'],
  title: 'action/ChangeHistoryOutlined',
};

export default meta;
type Story = StoryObj<typeof ChangeHistoryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
