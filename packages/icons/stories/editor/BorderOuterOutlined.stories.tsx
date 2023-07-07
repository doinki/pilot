import type { Meta, StoryObj } from '@storybook/react';

import BorderOuterOutlined from '../../lib/editor/BorderOuterOutlined';

const meta: Meta<typeof BorderOuterOutlined> = {
  component: BorderOuterOutlined,
  tags: ['autodocs'],
  title: 'editor/BorderOuterOutlined',
};

export default meta;
type Story = StoryObj<typeof BorderOuterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
