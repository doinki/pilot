import type { Meta, StoryObj } from '@storybook/react';

import NatureOutlined from '../../lib/image/NatureOutlined';

const meta: Meta<typeof NatureOutlined> = {
  component: NatureOutlined,
  tags: ['autodocs'],
  title: 'image/NatureOutlined',
};

export default meta;
type Story = StoryObj<typeof NatureOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
