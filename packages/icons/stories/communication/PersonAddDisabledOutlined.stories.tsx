import type { Meta, StoryObj } from '@storybook/react';

import PersonAddDisabledOutlined from '../../lib/communication/PersonAddDisabledOutlined';

const meta: Meta<typeof PersonAddDisabledOutlined> = {
  component: PersonAddDisabledOutlined,
  tags: ['autodocs'],
  title: 'communication/PersonAddDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof PersonAddDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
