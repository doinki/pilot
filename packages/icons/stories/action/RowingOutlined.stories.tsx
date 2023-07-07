import type { Meta, StoryObj } from '@storybook/react';

import RowingOutlined from '../../lib/action/RowingOutlined';

const meta: Meta<typeof RowingOutlined> = {
  component: RowingOutlined,
  tags: ['autodocs'],
  title: 'action/RowingOutlined',
};

export default meta;
type Story = StoryObj<typeof RowingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
