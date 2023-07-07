import type { Meta, StoryObj } from '@storybook/react';

import MoveDownOutlined from '../../lib/editor/MoveDownOutlined';

const meta: Meta<typeof MoveDownOutlined> = {
  component: MoveDownOutlined,
  tags: ['autodocs'],
  title: 'editor/MoveDownOutlined',
};

export default meta;
type Story = StoryObj<typeof MoveDownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
