import type { Meta, StoryObj } from '@storybook/react';

import SeventeenMpOutlined from '../../lib/image/SeventeenMpOutlined';

const meta: Meta<typeof SeventeenMpOutlined> = {
  component: SeventeenMpOutlined,
  tags: ['autodocs'],
  title: 'image/SeventeenMpOutlined',
};

export default meta;
type Story = StoryObj<typeof SeventeenMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
