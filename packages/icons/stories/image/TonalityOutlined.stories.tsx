import type { Meta, StoryObj } from '@storybook/react';

import TonalityOutlined from '../../lib/image/TonalityOutlined';

const meta: Meta<typeof TonalityOutlined> = {
  component: TonalityOutlined,
  tags: ['autodocs'],
  title: 'image/TonalityOutlined',
};

export default meta;
type Story = StoryObj<typeof TonalityOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
