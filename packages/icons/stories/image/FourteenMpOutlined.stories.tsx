import type { Meta, StoryObj } from '@storybook/react';

import FourteenMpOutlined from '../../lib/image/FourteenMpOutlined';

const meta: Meta<typeof FourteenMpOutlined> = {
  component: FourteenMpOutlined,
  tags: ['autodocs'],
  title: 'image/FourteenMpOutlined',
};

export default meta;
type Story = StoryObj<typeof FourteenMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
