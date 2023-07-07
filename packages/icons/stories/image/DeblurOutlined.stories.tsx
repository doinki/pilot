import type { Meta, StoryObj } from '@storybook/react';

import DeblurOutlined from '../../lib/image/DeblurOutlined';

const meta: Meta<typeof DeblurOutlined> = {
  component: DeblurOutlined,
  tags: ['autodocs'],
  title: 'image/DeblurOutlined',
};

export default meta;
type Story = StoryObj<typeof DeblurOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
