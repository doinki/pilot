import type { Meta, StoryObj } from '@storybook/react';

import FourMpOutlined from '../../lib/image/FourMpOutlined';

const meta: Meta<typeof FourMpOutlined> = {
  component: FourMpOutlined,
  tags: ['autodocs'],
  title: 'image/FourMpOutlined',
};

export default meta;
type Story = StoryObj<typeof FourMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
