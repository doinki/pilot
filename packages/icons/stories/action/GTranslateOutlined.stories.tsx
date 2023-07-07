import type { Meta, StoryObj } from '@storybook/react';

import GTranslateOutlined from '../../lib/action/GTranslateOutlined';

const meta: Meta<typeof GTranslateOutlined> = {
  component: GTranslateOutlined,
  tags: ['autodocs'],
  title: 'action/GTranslateOutlined',
};

export default meta;
type Story = StoryObj<typeof GTranslateOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
