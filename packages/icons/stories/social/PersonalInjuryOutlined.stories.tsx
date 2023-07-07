import type { Meta, StoryObj } from '@storybook/react';

import PersonalInjuryOutlined from '../../lib/social/PersonalInjuryOutlined';

const meta: Meta<typeof PersonalInjuryOutlined> = {
  component: PersonalInjuryOutlined,
  tags: ['autodocs'],
  title: 'social/PersonalInjuryOutlined',
};

export default meta;
type Story = StoryObj<typeof PersonalInjuryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
