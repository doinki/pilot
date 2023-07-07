import type { Meta, StoryObj } from '@storybook/react';

import ArrowRightAltOutlined from '../../lib/action/ArrowRightAltOutlined';

const meta: Meta<typeof ArrowRightAltOutlined> = {
  component: ArrowRightAltOutlined,
  tags: ['autodocs'],
  title: 'action/ArrowRightAltOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowRightAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
