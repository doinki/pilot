import type { Meta, StoryObj } from '@storybook/react';

import ForkRightOutlined from '../../lib/maps/ForkRightOutlined';

const meta: Meta<typeof ForkRightOutlined> = {
  component: ForkRightOutlined,
  tags: ['autodocs'],
  title: 'maps/ForkRightOutlined',
};

export default meta;
type Story = StoryObj<typeof ForkRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
