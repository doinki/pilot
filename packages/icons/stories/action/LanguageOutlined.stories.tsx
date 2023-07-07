import type { Meta, StoryObj } from '@storybook/react';

import LanguageOutlined from '../../lib/action/LanguageOutlined';

const meta: Meta<typeof LanguageOutlined> = {
  component: LanguageOutlined,
  tags: ['autodocs'],
  title: 'action/LanguageOutlined',
};

export default meta;
type Story = StoryObj<typeof LanguageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
