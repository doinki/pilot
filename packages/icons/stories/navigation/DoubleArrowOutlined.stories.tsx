import type { Meta, StoryObj } from '@storybook/react';

import DoubleArrowOutlined from '../../lib/navigation/DoubleArrowOutlined';

const meta: Meta<typeof DoubleArrowOutlined> = {
  component: DoubleArrowOutlined,
  tags: ['autodocs'],
  title: 'navigation/DoubleArrowOutlined',
};

export default meta;
type Story = StoryObj<typeof DoubleArrowOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
