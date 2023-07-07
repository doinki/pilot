import type { Meta, StoryObj } from '@storybook/react';

import BiotechOutlined from '../../lib/content/BiotechOutlined';

const meta: Meta<typeof BiotechOutlined> = {
  component: BiotechOutlined,
  tags: ['autodocs'],
  title: 'content/BiotechOutlined',
};

export default meta;
type Story = StoryObj<typeof BiotechOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
