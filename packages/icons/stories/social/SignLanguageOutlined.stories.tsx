import type { Meta, StoryObj } from '@storybook/react';

import SignLanguageOutlined from '../../lib/social/SignLanguageOutlined';

const meta: Meta<typeof SignLanguageOutlined> = {
  component: SignLanguageOutlined,
  tags: ['autodocs'],
  title: 'social/SignLanguageOutlined',
};

export default meta;
type Story = StoryObj<typeof SignLanguageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
